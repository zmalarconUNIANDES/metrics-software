pipeline {
   agent any
   environment {
      GIT_REPO = '202110_Equipo1'
      GIT_CREDENTIAL_ID = '67fc884e-63ed-47cc-8a49-e91b798c7178'
      SONARQUBE_URL = 'http://172.24.100.52:8082/sonar-misovirtual'
   }
   stages {
      stage('Checkout') {
         steps {
            scmSkip(deleteBuild: true, skipPattern:'.*\\[ci-skip\\].*')

            git branch: 'master',
               credentialsId: env.GIT_CREDENTIAL_ID,
               url: 'https://github.com/MISW-4104-Web/' + env.GIT_REPO
         }
      }
      stage('Build') {
         // Build app
         steps {
            script {
               docker.image('citools-isis2603:latest').inside('-u root') {
                  sh '''
                     npm i -s
                     npm i typescript@3.9.5
                     ng build
                  '''
               }
            }
         }
      }
     stage('Test') {
         steps {
            script {
               docker.image('citools-isis2603:latest').inside('-u root') {
                  sh '''
                     echo "deb http://dl.google.com/linux/chrome/deb/ stable main" | tee -a /etc/apt/sources.list
                      wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
                      apt-get update
                      apt-get install -y libxpm4 libxrender1 libgtk2.0-0 libnss3 libgconf-2-4
                      apt-get install -y google-chrome-stable
                      apt-get install -y xvfb gtk2-engines-pixbuf
                      apt-get install -y xfonts-cyrillic xfonts-100dpi xfonts-75dpi xfonts-base xfonts-scalable
                      apt-get install -y imagemagick x11-apps
                      ng test --watch=false --code-coverage true
                      npm run sonar
                  '''
               }
            }
         }
      }
      stage('Static Analysis') {
         // Run static analysis
         steps {
            sh '''
               docker run --rm -u root -e SONAR_HOST_URL=${SONARQUBE_URL} -v ${WORKSPACE}:/usr/src sonarsource/sonar-scanner-cli:4.3
            '''
         }
      }
      stage('Git Analysis') {
         // Run git analysis
         steps {
            script {
               docker.image('gitinspector-isis2603').inside('--entrypoint=""') {
                  sh '''
                     mkdir -p ./reports/
                     datetime=$(date +'%Y-%m-%d_%H%M%S')
                     gitinspector --file-types="cs,js,asax,ascx,asmx,aspx,html,fs,ts" --format=html --RxU -w -T -x author:Bocanegra -x author:estudiante > ./reports/index.html
                  '''
               }
            }
            withCredentials([usernamePassword(credentialsId: env.GIT_CREDENTIAL_ID, passwordVariable: 'GIT_PASSWORD', usernameVariable: 'GIT_USERNAME')]) {
               sh('git config --global user.email "ci-isis2603@uniandes.edu.co"')
               sh('git config --global user.name "ci-isis2603"')
               sh('git add ./reports/index.html')
               sh('git commit -m "[ci-skip] GitInspector report added"')
               sh('git pull https://${GIT_USERNAME}:${GIT_PASSWORD}@github.com/MISW-4104-Web/${GIT_REPO} master')
               sh('git push https://${GIT_USERNAME}:${GIT_PASSWORD}@github.com/MISW-4104-Web/${GIT_REPO} master')
            }
         }
      }
   }
   post {
      always {
         // Clean workspace
         cleanWs deleteDirs: true
      }
   }
}

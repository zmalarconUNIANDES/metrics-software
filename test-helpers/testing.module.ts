import { registerLocaleData } from '@angular/common';
import localeEsCO from '@angular/common/locales/es-CO';
import { NgModule } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

registerLocaleData(localeEsCO);

@NgModule({
  imports: [RouterTestingModule]
})
export class TestingModule {}

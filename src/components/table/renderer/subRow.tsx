import React from 'react';
import { ICellRendererParams, ICellRendererComp } from 'ag-grid-community';
import './style.css';

type ICellRendererParamsCustom = ICellRendererParams & {
  subField: string;
  type: string;
  editable: boolean;
};

export default class SubRow implements ICellRendererComp {
  ui: any;

  init(params: ICellRendererParamsCustom) {
    const cellBlank = !params.value;
    if (cellBlank) {
      return;
    }
    this.ui = document.createElement('div');
    const changeValue = (e) => {
      debugger;
      console.log(e, params);
    };
    let cell = '';
    params.value.map((val) => {
      if (params?.editable) {
        cell =
          cell +
          '<div class=""><input class="ag-custom-input ag-custom-input-focus" type="number" onchange="function hi(params){this.changeValue(); console.log(params)};hi()" value="' +
          val[params?.subField] +
          '">' +
          '</div>';
      } else {
        cell = cell + '<div class="">' + val[params?.subField] + '</div>';
      }
    });

    this.ui.innerHTML = '<div class="celldisplay">' + cell + '</div>';
  }

  getGui() {
    return this.ui;
  }

  refresh() {
    return false;
  }
}

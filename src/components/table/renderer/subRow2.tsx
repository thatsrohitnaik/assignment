import { ICellRendererParams } from 'ag-grid-community';
import React from 'react';
import './style.css';

export interface ImageCellRendererParams extends ICellRendererParams {
  rendererImage: string;
}
type ICellRendererParamsCustom = ICellRendererParams & {
  subField: string;
  type: string;
  editable: boolean;
};

export default (params: ICellRendererParamsCustom) => {
  return (
    <div className="celldisplay">
      {params.value.map((val, index) => {
        if (params?.editable) {
          return (
            <div className="" key={index}>
              <input
                className="ag-custom-input ag-custom-input-focus"
                type="number"
                onChange={(e) => {}}
                defaultValue={val[params?.subField]}
              />
            </div>
          );
        }
        return (
          <div key={index} className="">
            {val[params?.subField]}
          </div>
        );
      })}
    </div>
  );
};

import { rowIDFormatter } from '../../../../components/table/helpers/';
import subRow from '../../../../components/table/renderer/subRow2';
import { IGroupCellRendererParams } from 'ag-grid-community';
import { ColDef, ColGroupDef, RowSpanParams } from 'ag-grid-community';

function rowSpan(params: RowSpanParams<any>) {
  var stats = params.data ? params.data.stats : [];
  return stats?.length || 1;
}

export const getAthleteCols = (showSrCheckbox: boolean): any[] => {
  console.log(showSrCheckbox);
  let athleteCol: (ColDef | ColGroupDef)[] = [
    {
      headerName: 'Athlete Details',
      children: [
        {
          headerName: 'ID',
          valueGetter: 'node.id',
          valueFormatter: rowIDFormatter,
          checkboxSelection: showSrCheckbox,
          field: 'id',
          width: 75,
        },
        { field: 'athlete', flex: 1, minWidth: 200 },
        {
          field: 'goal',
          cellEditor: 'agNumberCellEditor',
          editable: true,
          width: 100,
          icons: {
            menu: '<i class="fa fa-pen" style="width: 13px"/>',
          },
        },
        { field: 'position', cellEditor: 'agTextCellEditor' },
        { field: 'country', cellEditor: 'agTextCellEditor' },
        { field: 'club' },
      ],
    },
    {
      headerName: 'Stats',
      children: [
        {
          headerName: 'Cup',
          width: 180,
          field: 'stats',
          autoHeight: true,
          rowSpan: rowSpan,
          cellRenderer: subRow,
          cellRendererParams: {
            subField: 'cup',
            type: 'text',
            editable: false,
          },
          cellClassRules: {
            'show-cell': 'value !== undefined',
          },
          cellDataType: false,
        },
        {
          headerName: 'Appearance',
          width: 150,
          field: 'stats',
          autoHeight: true,
          rowSpan: rowSpan,
          cellRenderer: subRow,
          icons: {
            menu: '<i class="fa fa-pen" style="width: 13px"/>',
          },
          cellRendererParams: {
            subField: 'appearance',
            type: 'number',
            editable: true,
          },
          cellClassRules: {
            'show-cell': 'value !== undefined',
          },
          cellDataType: false,
          columnGroupShow: 'open',
        },

        {
          headerName: 'Goal',
          width: 120,
          field: 'stats',
          autoHeight: true,
          rowSpan: rowSpan,
          cellRenderer: subRow,
          cellRendererParams: {
            subField: 'goal',
            type: 'number',
            editable: false,
          },
          cellClassRules: {
            'show-cell': 'value !== undefined',
          },
          columnGroupShow: 'open',
        },
        {
          headerName: 'Assist',
          width: 120,
          field: 'stats',
          autoHeight: true,
          rowSpan: rowSpan,
          cellRenderer: subRow,
          cellRendererParams: {
            subField: 'assist',
            type: 'number',
            editable: false,
          },
          cellClassRules: {
            'show-cell': 'value !== undefined',
          },
          columnGroupShow: 'open',
        },
        {
          headerName: 'Red Card',
          width: 120,
          field: 'stats',
          autoHeight: true,
          rowSpan: rowSpan,
          cellRenderer: subRow,
          cellRendererParams: {
            subField: 'redCard',
            type: 'number',
            editable: false,
          },
          cellClassRules: {
            'show-cell': 'value !== undefined',
          },
          columnGroupShow: 'open',
        },
      ],
    },
    {
      headerName: '',
      children: [
        {
          field: 'retired',
        },
      ],
    },
  ];
  return athleteCol;
};

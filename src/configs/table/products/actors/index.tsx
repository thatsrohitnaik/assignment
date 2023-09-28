import { rowIDFormatter } from '../../../../components/table/helpers/';
import { ColDef, ColGroupDef } from 'ag-grid-community';

export const getActorsCols = (showSrCheckbox: boolean): any[] => {
  let actorsCol: (ColDef | ColGroupDef)[] = [
    {
      headerName: 'Actor Details',
      children: [
        {
          headerName: 'ID',
          valueGetter: 'node.id',
          valueFormatter: rowIDFormatter,
          checkboxSelection: showSrCheckbox,
          field: 'id',
          width: 75,
        },
        { field: 'actor', flex: 1, minWidth: 200 },
        {
          field: 'movies',
          cellEditor: 'agNumberCellEditor',
          editable: true,
          icons: {
            menu: '<i class="fa fa-pen" style="width: 13px"/>',
          },
          width: 110,
        },
        { field: 'latestMovie', cellEditor: 'agTextCellEditor' },
        {
          field: 'upcomingMovie',
          cellEditor: 'agTextCellEditor',
          editable: true,
          icons: {
            menu: '<i class="fa fa-pen" style="width: 13px"/>',
          },
        },
        { field: 'homeTown' },
      ],
    },
    {
      headerName: 'Social Media',
      children: [
        {
          field: 'followers',
          cellEditor: 'agNumberCellEditor',
          editable: true,
          icons: {
            menu: '<i class="fa fa-pen" style="width: 13px"/>',
          },
          width: 120,
        },
        { field: 'instagram', width: 120, columnGroupShow: 'open' },
        { field: 'twitter', width: 120, columnGroupShow: 'open' },
        { field: 'tumblr', width: 120, columnGroupShow: 'open' },
        { field: 'pilotLicense', width: 150, columnGroupShow: 'open' },
      ],
    },
  ];
  return actorsCol;
};

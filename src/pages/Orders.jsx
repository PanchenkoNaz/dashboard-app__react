import React from 'react'

// Components for the styling
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

// Data
import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';

// Header
import { Header } from '../components'

const Orders = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders"/>

      {/* creates a table with different columns */}
      <GridComponent
        id="gridcomp"
        // passes data to the component
        dataSource={ordersData}
        // for Pagination
        allowPaging
        // allows sorting of grid records when column header is clicked
        allowSorting
        >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
          <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit]} />
      </GridComponent>
    </div>
  )
}

export default Orders
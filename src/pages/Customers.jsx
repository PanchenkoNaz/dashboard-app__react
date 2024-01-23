import React from 'react'

// Components for the styling
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';

// Data
import { customersData, customersGrid } from '../data/dummy';

// Header
import { Header } from '../components'

const Customers = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers"/>

      {/* creates a table with different columns */}
      <GridComponent
        // passes data to the component
        dataSource={customersData}
        // for Pagination
        allowPaging
        // allows sorting of grid records when column header is clicked
        allowSorting
        // for the search
        toolbar={['Delete']}
        
        editSettings={{ allowDeleting: true, allowEditing: true }}
        >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
          <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[ Sort, Filter, Page, Edit, Toolbar, Selection]} />
      </GridComponent>
    </div>
  )
}

export default Customers
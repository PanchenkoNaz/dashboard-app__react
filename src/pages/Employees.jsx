import React from 'react'

// Components for the styling
import { GridComponent, ColumnsDirective, ColumnDirective, Search, Page, Toolbar, Inject } from '@syncfusion/ej2-react-grids';

// Data
import { employeesData, employeesGrid } from '../data/dummy';

// Header
import { Header } from '../components'

const Employees = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees"/>

      {/* creates a table with different columns */}
      <GridComponent
        // passes data to the component
        dataSource={employeesData}
        // for Pagination
        allowPaging
        // allows sorting of grid records when column header is clicked
        allowSorting
        // for the search
        toolbar={['Search']}
        width="auto"
        >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
          <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default Employees
import React from 'react'
import PageTitle from './PageTitle';
const PageHeading = ({children}) => {
  return (
    <div className="page-heading-container">
   <PageTitle title="Myanmar Food Specialties"/>
   <p className='page-heading-paragraph'>{children}</p>
   </div>
  );
}
export default PageHeading
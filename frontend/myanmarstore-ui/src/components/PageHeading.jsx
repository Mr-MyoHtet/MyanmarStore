import React from 'react'
import PageTitle from './PageTitle';
const PageHeading = ({children}) => {
  return (
    <div className="page-heading-container dark:text-normalbg">
   <PageTitle title="Myanmar Food Specialties"/>
   <p className='page-heading-paragraph dark:text-normalbg'>{children}</p>
   </div>
  );
}
export default PageHeading
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

function Template1({ subpages }) {
  return (
    <div className='page-template-1'>
      <aside>
        {subpage.links.map((subpagelink) => {
          <Link to={subpagelink} />;
        })}
      </aside>
      <Switch>
        {subpages.map((subpage) => {
          <Route path={subpage.path} component={subpage.component} />;
        })}
      </Switch>
    </div>
  );
}

export default Template1;

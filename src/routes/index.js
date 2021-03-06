/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable global-require */

// The top-level (parent) route
export default {

  path: '/',

  // Keep in mind, routes are evaluated in order
  children: [
    require('./home').default,
    require('./shop').default,
    require('./linhkien').default,
    require('./shopCategory').default,
    // require('./allService').default,
    // require('./service').default,
    // require('./tracking').default,
    require('./about').default,
    require('./about2').default,
    require('./about3').default,
    require('./news').default,
    require('./newsCategory').default,
    // require('./category').default,
    require('./newsDetail').default,
    require('./sanPham').default,
    require('./contact').default,
    require('./phanphoi').default,
    require('./cart').default,
    require('./checkout').default,
    require('./admin').default,

    // Wildcard routes, e.g. { path: '*', ... } (must go last)
    require('./notFound').default,
  ],

  async action({ next }) {
    // Execute each child route until one of them return the result
    const route = await next();

    // Provide default values for title, description etc.
    route.title = `${route.title || 'Untitled Page'}`;
    route.description = route.description || '';
    return route;
  },

};

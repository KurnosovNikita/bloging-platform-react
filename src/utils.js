const apiPath = 'https://jsonplaceholder.typicode.com/';

export const RESOURCE_TYPE = {
    posts: 'posts',
    comments: 'comments',
    users: 'users',
    albums: 'albums',
};

export const getData = (resourceType) => {
    const url = apiPath + resourceType;

    return fetch(url, {
        method: 'GET',
        contentType: 'application/json',
    })
      .catch((error) => {
          throw new Error('Can not get Data', error);
      });
};

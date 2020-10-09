import * as ActionTypes from './ActionTypes';


export const fetchProducts = () => (dispatch) => {

    dispatch(productsLoading(true));

    return fetch('https://serieux-saucisson-31787.herokuapp.com/api/productdetails')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(products => dispatch(addProducts(products)))
    .catch(error => dispatch(productsFailed(error.message)));
}


export const productsLoading = () => ({
    type: ActionTypes.GET_PRODUCTS_LOADING
});

export const productsFailed = (errmess) => ({
    type: ActionTypes.GET_PRODUCTS_FAILED,
    payload: errmess
});

export const addProducts = (products) => ({
    type: ActionTypes.GET_PRODUCTS,
    payload: products
});

export const fetchJobProfiles = () => (dispatch) => {

  dispatch(jobProfilesLoading(true));

  return fetch('https://serieux-saucisson-31787.herokuapp.com/api/jobprofiles')
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          var errmess = new Error(error.message);
          throw errmess;
    })
  .then(response => response.json())
  .then(jobProfiles => dispatch(addJobProfiles(jobProfiles)))
  .catch(error => dispatch(jobProfilesFailed(error.message)));
}


export const jobProfilesLoading = () => ({
  type: ActionTypes.GET_JOB_PROFILES_LOADING
});

export const jobProfilesFailed = (errmess) => ({
  type: ActionTypes.GET_JOB_PROFILES_FAILED,
  payload: errmess
});

export const addJobProfiles = (jobProfiles) => ({
  type: ActionTypes.GET_JOB_PROFILES,
  payload: jobProfiles
});


export const fetchTodayLaunch = () => (dispatch) => {

  dispatch(todayLaunchLoading(true));

  return fetch('https://serieux-saucisson-31787.herokuapp.com/api/hotproducts/recent')
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          var errmess = new Error(error.message);
          throw errmess;
    })
  .then(response => response.json())
  .then(todayLaunch => dispatch(addTodayLaunch(todayLaunch)))
  .catch(error => dispatch(todayLaunchFailed(error.message)));
}


export const todayLaunchLoading = () => ({
  type: ActionTypes.GET_TODAY_LAUNCH_LOADING
});

export const todayLaunchFailed = (errmess) => ({
  type: ActionTypes.GET_TODAY_LAUNCH_FAILED,
  payload: errmess
});

export const addTodayLaunch = (todayLaunch) => ({
  type: ActionTypes.GET_TODAY_LAUNCH,
  payload: todayLaunch
});


export const fetchTrendingProducts = () => (dispatch) => {

  dispatch(trendingProductsLoading(true));

  return fetch('https://serieux-saucisson-31787.herokuapp.com/api/hotproducts/')
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          var errmess = new Error(error.message);
          throw errmess;
    })
  .then(response => response.json())
  .then(trendingProducts => dispatch(addTrendingProducts(trendingProducts)))
  .catch(error => dispatch(jobProfilesFailed(error.message)));
}


export const trendingProductsLoading = () => ({
  type: ActionTypes.GET_TRENDING_PRODUCTS_LOADING
});

export const trendingProductsFailed = (errmess) => ({
  type: ActionTypes.GET_TRENDING_PRODUCTS_FAILED,
  payload: errmess
});

export const addTrendingProducts = (trendingProducts) => ({
  type: ActionTypes.GET_TRENDING_PRODUCTS,
  payload: trendingProducts
});



// export const fetchCommunityPosts = () => (dispatch) => {

//     dispatch(productsLoading(true));

//     return fetch('https://serieux-saucisson-31787.herokuapp.com/api/community')
//     .then(response => {
//         if (response.ok) {
//           return response;
//         } else {
//           var error = new Error('Error ' + response.status + ': ' + response.statusText);
//           error.response = response;
//           throw error;
//         }
//       },
//       error => {
//             var errmess = new Error(error.message);
//             throw errmess;
//       })
//     .then(response => response.json())
//     .then(posts => dispatch(addPosts(posts)))
//     .catch(error => dispatch(productsFailed(error.message)));
// }


// export const postsLoading = () => ({
//     type: ActionTypes.GET_COMMUNITY_POSTS
// });

// export const postsFailed = (errmess) => ({
//     type: ActionTypes.GET_COMMUNITY_POSTS_LOADING,
//     payload: errmess
// });

// export const addPosts = (posts) => ({
//     type: ActionTypes.GET_COMMUNITY_POSTS_FAILED,
//     payload: posts
// });
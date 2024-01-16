import sanityClient from './sanity'


let sanityQuery = (query, params) => sanityClient.fetch(query, params)

export const getFeaturedRestaurant = () => {
    return sanityQuery(`
    *[_type=='featured']{
      ...,
      restaurants[]->{
        ...,
        dishes[]->{
          ...
        },
        type->{
        name
        }
      }
    }
    `)
}

export const getCategories = () => {
    return sanityQuery(`
          *[_type == 'category']
        `);
}

export const getFeaturedRestaurantbyId = id => {
    return sanityQuery(`
           *[_type == 'featured' && _id == $id] {
            ...,
            restaurants[]->{
                ...,
                dishes[]->{
                  ...
                    type->{
                        name
                    }
                }
            }
           }[0]
        `,{id})
}
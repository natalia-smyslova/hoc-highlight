import Popular from "./Popular";
import New from "./New";
import PropTypes from 'prop-types';

function sortByViews(Component) {
    return function Sorting (props) {

      Sorting.propTypes = {
        views: PropTypes.number
      }

      if (props.views > 1000) {
        return (
          <Popular><Component {...props} /></Popular>
        )
      }
      if (props.views < 100) {
        return (
          <New><Component {...props} /></New>
        )
      }
      return <Component {...props} />
    }
  }

  export default sortByViews;



//  const SortByViews = withSortByViews(Popular, New);

// function withSortByViews(Popular, New) {
//     return function Sorting(props) {
//         switch (true) {
//             case (props.view > 1000):
//                 return <Popular {...props} />;

//             case (props.view < 1000):
//                 return <New {...props} />;
//         }
//     }
// };
// export default SortByViews;
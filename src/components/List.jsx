import Article from "./Article";
import Video from "./Video";
import SortByViews from "./SortByViews";
import { nanoid } from "nanoid";

function List(props) {
    return props.list.map(item => {
        let HOCcomponent;

        switch (item.type) {
            case 'video':
                HOCcomponent = SortByViews(Video);
                return (
                <HOCcomponent key={nanoid()} {...item} />
                );

            case 'article':
                HOCcomponent = SortByViews(Article);
                return (<HOCcomponent key={nanoid()}  {...item} />);

            default:
                return (
                    <div className="item item-article">
                        <h3 className='error'>Произошла неизвестная ошибка...</h3>
                    </div>
                )

            // switch (item.type) {
            //     case 'video':
            //         content = <Video {...item} />;
            //         break;

            //     case 'article':
            //         content = <Article {...item} />;
            //         break;
            // }

            // return (
            //     <SortByViews key={nanoid()}  views={item.views}>
            //         {content}
            //     </SortByViews>
            // )
    
        }
    });
  }

export default List;
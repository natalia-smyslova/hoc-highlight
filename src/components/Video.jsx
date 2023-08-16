import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

function Video(props) {
  return (
    <div className="item item-video">
      <iframe id={nanoid()} src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <p className="views">Просмотров: {props.views}</p>
    </div>
  )
}

Video.propTypes = {
  url: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired
}

export default Video;
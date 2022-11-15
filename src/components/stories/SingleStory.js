// For NewsList
import { useSelector } from 'react-redux';
import Card from 'antd/lib/card/Card';
import { Badge } from 'antd';
import Meta from 'antd/lib/card/Meta';
import './SingleStory.css';
import { Link } from 'react-router-dom';

import { convertDate } from '../../store/news-slice';

const SingleStory = props => {
  const story = props.story;

  const ui = useSelector(state => state.ui);

  const { status } = ui.notification;
  const loading = status === 'pending' ? true : false;

  return (
    <Link to={`/news/${story.id}`}>
      <Card className="story-card" loading={loading} key={story.id}>
        <Badge.Ribbon
          color="red"
          className="story-card__badge"
          text={`${story.score} point${story.score === 1 ? '' : 's'}`}
        >
          <Meta
            title={story.title}
            description={`By ${story.by} at ${convertDate(story.time)}`}
          />
        </Badge.Ribbon>
      </Card>
    </Link>
  );
};

export default SingleStory;

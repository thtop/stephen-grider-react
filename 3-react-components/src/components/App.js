import React from 'react';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';
import moment from 'moment';


const App = () => {
    
    const datePattern = 'YYYYMMDD';

    return (
        <div className="ui container comments">

            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()}
                    author={faker.name.firstName()} 
                    timeAgo={moment(new Date(), datePattern).fromNow()}
                    content={faker.lorem.sentence()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()}
                    author={faker.name.firstName()} 
                    timeAgo={moment(new Date(), datePattern).fromNow()}
                    content={faker.lorem.sentence()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()}
                    author={faker.name.firstName()} 
                    timeAgo={moment(new Date(), datePattern).fromNow()}
                    content={faker.lorem.sentence()}
                />
            </ApprovalCard>


        </div>
    )
};

export default App;
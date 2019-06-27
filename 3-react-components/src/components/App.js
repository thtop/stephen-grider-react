import React from 'react';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import Message from './Message';
import Segment from './Segment';
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


            <div>
                <Message 
                    header="Changes in Service"
                    text="We just updated our privacy policy here to better service our customers."
                />
            </div>

            <div><br /></div>

            <div>
                <Segment>
                    <div className="ui icon header">
                        <i className="pdf file outline icon"></i>
                        No documents are listed for this customer.
                    </div>
                    <div className="ui primary button">Add Document</div>
                </Segment>
                <Segment>
                    <h4 class="ui header">For Your Information</h4>
                    <p>
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                    </p>
                </Segment>
            </div>

            <div><br /></div>
            
        </div>
    )
};

export default App;
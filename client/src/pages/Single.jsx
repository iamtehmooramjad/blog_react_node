import React from 'react';

import Edit from "../img/edit.png"
import Delete from "../img/delete.png"
import {Link} from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
    return (
        <div className='single'>
            <div className="content">
                <img
                    src="https://images.pexels.com/photos/13551935/pexels-photo-13551935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""/>
                <div className="user">
                    <img src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg" alt=""/>
                    <div className="info">
                        <span>Tehmoor</span>
                        <p>Posted 2 days ago</p>
                    </div>

                    <div className="edit">
                        <Link to={`/write?edit=2`}>
                            <img src={Edit} alt=""/>
                        </Link>
                        <img src={Delete} alt=""/>
                    </div>
                </div>
                <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto atque eligendi id inventore necessitatibus recusandae totam velit. Cupiditate doloribus explicabo optio placeat quae. Accusamus amet labore laboriosam porro veniam!
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam blanditiis dolor eligendi, et fugit in laborum optio perspiciatis quaerat qui quisquam quo tempore! Aspernatur autem commodi delectus dolore, eum ipsa iste labore praesentium, quas quis reiciendis veniam voluptate voluptatem. Amet architecto at aut commodi consequatur culpa debitis distinctio doloribus dolorum enim est, eum expedita impedit iusto laborum natus nulla perferendis porro quia quibusdam quis quisquam quo quod quos reiciendis rerum sit unde ut veniam voluptatum! Amet commodi distinctio dolorem est, et ipsa nobis odio officiis quasi, quis saepe voluptate.
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, atque delectus dicta et excepturi fugiat laboriosam quisquam rerum? Atque exercitationem molestiae mollitia necessitatibus pariatur placeat quo reiciendis? Aliquam, aliquid error eum explicabo facilis, incidunt iusto nihil, officiis pariatur quae sequi totam unde! At doloribus pariatur praesentium quas quasi quidem sequi! Aperiam consequuntur dolore exercitationem. Aut beatae consequatur cumque ex fuga nesciunt possimus quia tempora voluptate voluptatum? Doloribus labore natus, officia optio quaerat quis quos similique vero? Accusantium dolorum eligendi facere facilis in labore laboriosam, molestias officiis pariatur placeat repellendus saepe, ut, voluptas. Cum distinctio enim libero molestiae quam sapiente tempore! Animi commodi corporis dicta dignissimos distinctio dolorem ea earum ex explicabo itaque iure molestiae molestias nulla perspiciatis quae, quaerat ratione reiciendis tempore voluptas voluptates! Dolorum eveniet exercitationem nobis sunt voluptas?
                </p>
            </div>

            <Menu />
        </div>
    );
};

export default Single;

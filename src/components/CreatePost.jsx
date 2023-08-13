import '../styles/CreatePost.css';
import { useRef } from 'react';

export default function CreatePost({ yourPosts = [] }) {
  //your post hardcoded for the kicks
  yourPosts = [
    {
      id: 0,
      reputation: 100,
      userName: 'Mob',
      location: 'Venezuela',
      payment: 'Bank transfer',
      asset: 'Cash',
      rate: 9,
      position: 'Selling',
    },
    {
      id: 1,
      reputation: 100,
      userName: 'Mob',
      location: 'Venezuela',
      payment: 'Bank transfer',
      asset: 'Cash',
      rate: 9,
      position: 'Selling',
    },
  ];
  const secondView = useRef(null);
  return (
    <>
      <div className='your-post'>
        <div className='firt-view'>
          <form action='/' method='post' className='create-post-form'>
            <h3>What are you looking for?</h3>
            <div className='filters'>
              <div className='buy-sell'>
                <button>Buy</button>
                <button>Sell</button>
              </div>
              <div className='details'>
                <label>
                  <span>Asset</span>
                  <input type='text' name='asset' id='asset' />
                </label>
                <label>
                  <span>Amount</span>
                  <input type='number' name='amount' id='amount' />
                </label>
                <label>
                  <span>Location</span>
                  <input type='text' name='location' id='location' />
                </label>
                <label>
                  <span>Payment</span>
                  <input type='text' name='payment' id='payment' />
                </label>
              </div>
            </div>
            <div className='create-go-to'>
              <button type='submit'>Create post</button>
              <button
                type='button'
                className='go-to'
                onClick={() => {
                  secondView.current.classList.add('open');
                }}
              >
                <span>Go to your posts</span>
                <i className='fa-solid fa-arrow-right'></i>
              </button>
            </div>
          </form>
        </div>
        <div ref={secondView} className='second-view'>
          <h3>Your posts</h3>
          <div className='your-posts'>
            <ul>
              {yourPosts.map((post) => {
                return (
                  <li key={post.id}>
                    <span>{post.reputation}%</span>
                    <span>{post.userName}</span>
                    <span>{post.location}</span>
                    <span>{post.payment}</span>
                    <span>{post.asset}</span>
                    <span>{post.rate}bs/usd</span>
                    <span>{post.position}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='posts-options'>
            <button>
              Modify Post <i className='fa-solid fa-pencil'></i>
            </button>
            <button>
              Delete Post <i className='fa-solid fa-trash-can'></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

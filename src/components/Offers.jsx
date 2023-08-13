import '../styles/Offers.css';
import { useRef } from 'react';

export default function Offers({ offers = [] }) {
  //your post hardcoded for the kicks
  offers = [
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
      <div className='offers-container'>
        <div className='firt-view'>
          <form action='/' method='post' className='offers-form'>
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
            <div className='search-button-container'>
              <button
                type='submit'
                onClick={(e) => {
                  e.preventDefault();
                  secondView.current.classList.add('open');
                }}
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div ref={secondView} className='second-view'>
          <h3>Results</h3>
          <div className='results'>
            <ul>
              {offers.map((offer) => {
                return (
                  <li key={offer.id}>
                    <span>{offer.reputation}%</span>
                    <span>{offer.userName}</span>
                    <span>{offer.location}</span>
                    <span>{offer.payment}</span>
                    <span>{offer.asset}</span>
                    <span>{offer.rate}bs/usd</span>
                    <span>{offer.position}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='result-options'>
            <button
              onClick={() => {
                secondView.current.classList.toggle('open');
              }}
            >
              Go back to filter <i className='fa-solid fa-angle-left'></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

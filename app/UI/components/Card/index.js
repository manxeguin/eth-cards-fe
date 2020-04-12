import React from 'react';

function Card({ card }) {
  const { level, css, name, description, image, power, price } = card;

  return (
    <div className="dbz-card">
      <div className={`dbz-card__image dbz-card__image--${css} is-relative`}>
        <img src={image} alt={css} />
      </div>
      <div
        className={`dbz-card__level dbz-card__level--${css} has-text-centered`}
      >
        Level {level}
      </div>
      <div className="dbz-card__unit-name has-text-centered is-font-xl">
        {name}
      </div>
      <div className="dbz-card__unit-description has-text-centered">
        {description}
      </div>

      <div className="columns is-gapless has-text-centered is-space-m is-mobile">
        <div className="column">
          <div className="power is-font-xl is-space-s">
            <span role="img" aria-label="asd">
              💪
            </span>
            {power}
          </div>
        </div>
        <div className="column">
          <div className="price is-relative is-font-xl is-space-s">
            <div className="ether-icon" />
            {price}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

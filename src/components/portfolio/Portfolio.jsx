import './portfolio.scss';
import './work.scss';
import { portfolio } from '../../data';
import { KeyboardArrowUp } from '@material-ui/icons';
import Work from './Work';

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <a href="#about">
          <KeyboardArrowUp className="upArrow" />
        </a>
      <h1>Portfolio</h1>
        <ul className='worksList'>
          {Object.values(portfolio).map(work => {
            return (
              <li key={work.id}>
                <Work {...work} />
              </li>
            )
          })}
        </ul>
    </div>
  )
}

import './portfolio.scss';
import Work from '../work/Work';
import '../work/work.scss';
import { portfolio } from '../../data';
import { KeyboardArrowUp } from '@material-ui/icons';

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <a href="#about">
          <KeyboardArrowUp className="up-arrow" />
        </a>
      <h1>Portfolio</h1>
        <ul>
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

import { FunctionComponent } from 'react';
import {SquareProps} from './interfaces';

export const Square: FunctionComponent<SquareProps> = ({value, onClick}) => 
      <button className='square' onClick={onClick}>
        {value}
      </button>
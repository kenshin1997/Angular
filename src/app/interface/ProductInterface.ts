import {Characteristics} from './CharacteristicsInterface';
import {Description} from './DescriptionInterface';
import {Photo} from './PhotoInterface';


export interface Product {
  id: number;
  category: string;
  name: string;
  characteristics: Characteristics;
  description: Description;
  photos: Photo[];
}

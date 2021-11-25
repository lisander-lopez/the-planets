import "../parts/theme/main.css?raw";

// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Import other schemas we may have created
import { keyPoint } from './planet/keypoint';
import { planet } from './planet/planet';
import { temperature } from './utils/temperature';
import { timeUnit } from './utils/timeUnit';
import { distance } from './utils/distance';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    temperature,
    distance,
    timeUnit,
    keyPoint,
    planet
  ]),
})

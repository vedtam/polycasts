/**
 * Copyright 2017 Google Inc.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var faker = require('../index');

var hacker = {

  abbreviation : function () {
    return faker.random.array_element(faker.definitions.hacker.abbreviation);
  },

  adjective : function () {
    return faker.random.array_element(faker.definitions.hacker.adjective);
  },

  noun : function () {
    return faker.random.array_element(faker.definitions.hacker.noun);
  },

  verb : function () {
    return faker.random.array_element(faker.definitions.hacker.verb);
  },

  ingverb : function () {
    return faker.random.array_element(faker.definitions.hacker.ingverb);
  },

  phrase : function () {

    var data = {
      abbreviation: hacker.abbreviation(),
      adjective: hacker.adjective(),
      ingverb: hacker.ingverb(),
      noun: hacker.noun(),
      verb: hacker.verb()
    };

    var phrase = faker.random.array_element([ "If we {{verb}} the {{noun}}, we can get to the {{abbreviation}} {{noun}} through the {{adjective}} {{abbreviation}} {{noun}}!",
      "We need to {{verb}} the {{adjective}} {{abbreviation}} {{noun}}!",
      "Try to {{verb}} the {{abbreviation}} {{noun}}, maybe it will {{verb}} the {{adjective}} {{noun}}!",
      "You can't {{verb}} the {{noun}} without {{ingverb}} the {{adjective}} {{abbreviation}} {{noun}}!",
      "Use the {{adjective}} {{abbreviation}} {{noun}}, then you can {{verb}} the {{adjective}} {{noun}}!",
      "The {{abbreviation}} {{noun}} is down, {{verb}} the {{adjective}} {{noun}} so we can {{verb}} the {{abbreviation}} {{noun}}!",
      "{{ingverb}} the {{noun}} won't do anything, we need to {{verb}} the {{adjective}} {{abbreviation}} {{noun}}!",
      "I'll {{verb}} the {{adjective}} {{abbreviation}} {{noun}}, that should {{noun}} the {{abbreviation}} {{noun}}!"
   ]);

   return faker.helpers.mustache(phrase, data);

  },


};

module.exports = hacker;

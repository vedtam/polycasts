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

timing_test(function() {
  at(0 * 1000, function() {
    assert_styles(
      '.anim',
      [{'x':'100px','y':'300px','width':'100px'}]);
  }, "Autogenerated");
  at(0.3 * 1000, function() {
    assert_styles(
      '.anim',
      [{'x':'190px','y':'270px','width':'52px'}]);
  }, "Autogenerated");
  at(0.6 * 1000, function() {
    assert_styles(
      '.anim',
      [{'x':'280px','y':'240px','width':'26px'}]);
  }, "Autogenerated");
  at(0.8999999999999999 * 1000, function() {
    assert_styles(
      '.anim',
      [{'x':'369.99999999999994px','y':'210px','width':'44px'}]);
  }, "Autogenerated");
  at(1.2 * 1000, function() {
    assert_styles(
      '.anim',
      [{'x':'400px','y':'200px','width':'50px'}]);
  }, "Autogenerated");
}, "Autogenerated checks.");

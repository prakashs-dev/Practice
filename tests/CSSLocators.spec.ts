/**
 * CSS - Cascading Style Sheets
 * it combination of Html + JS + CSS
 *
 * 2 types of css locators
 * ------------------------
 *  1.Absolute CSS locators
 *  2.Relative CSS locators
 *
 * (Note : tag is optional)
 * tag with id                  - tag#id  or #id
 * tag with class               - tag.class or .class
 * tag with any other attribute - tag[attribute = value] or [attribute = value]
 * tag with class and attribute - tag.class[attribute = value] or class[attribute = value]
 *
 */

import { test, expect, chromium } from "@playwright/test"; 

test("test",async()=>{
    const browser = await chromium.launch()
})
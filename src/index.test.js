import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';
//fs is filesystem it allow us to interact with the filesystem using node and it comes from node


describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should say World', (done) => {
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, function(err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("World");
      done();
      window.close();
    });
  })
})

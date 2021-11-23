const formatErr = "Not in correct format.";
describe("10-digit ISBN", () => {
  it('Validate that "0-1985-2663-6" is valid.', () => {
    assert.equal(isbnValidator("0-1985-2663-6"), true);
  });
  it('Validate that "0 1985 2663 6" is valid.', () => {
    assert.equal(isbnValidator("0 1985 2663 6"), true);
  });
  it('Validate that "2-3463-5824-X" is valid.', () => {
    assert.equal(isbnValidator("2-3463-5824-X"), true);
  });
  it('Validate that "2-3163-5324-9" is NOT valid.', () => {
    assert.equal(isbnValidator("2-3163-5324-9"), false);
  });
  it('Validate that "4-5278-3467-1" is NOT valid.', () => {
    assert.equal(isbnValidator("4-5278-3467-1"), false);
  });
  it('Validate that "0-1985 2663-6" is NOT in correct format.', () => {
    assert.equal(isbnValidator("0-1985 2663-6"), formatErr);
  });
  it('Validate that "2-3463-5824-x" is NOT in correct format.', () => {
    assert.equal(isbnValidator("2-3463-5824-x"), formatErr);
  });
  it('Validate that "2-3463-5X24-9" is NOT in correct format.', () => {
    assert.equal(isbnValidator("2-3463-5X24-9"), formatErr);
  });
  it('Validate that "2-3a63-5324-9" is NOT in correct format.', () => {
    assert.equal(isbnValidator("2-3a63-5324-9"), formatErr);
  });
  it('Validate that "" is NOT in correct format.', () => {
    assert.equal(isbnValidator(""), formatErr);
  });
});
describe("13-digit ISBN", () => {
  it('Validate that "978-1-9403-1309-2" is valid.', () => {
    assert.equal(isbnValidator("978-1-9403-1309-2"), true);
  });
  it('Validate that "978 1 9403 1309 2" is valid.', () => {
    assert.equal(isbnValidator("978 1 9403 1309 2"), true);
  });
  it('Validate that "978-1-2345-6789-7" is valid.', () => {
    assert.equal(isbnValidator("978-1-2345-6789-7"), true);
  });
  it('Validate that "321-3-4733-9886-4" is NOT valid.', () => {
    assert.equal(isbnValidator("321-3-4733-9886-4"), false);
  });
  it('Validate that "758-2-1685-4377-4" is NOT valid.', () => {
    assert.equal(isbnValidator("758-2-1685-4377-4"), false);
  });
  it('Validate that "144-1-5673-A377-2" is NOT in correct format.', () => {
    assert.equal(isbnValidator("144-1-5673-A377-2"), formatErr);
  });
  it('Validate that "978-1-9403 1309-2" is NOT in correct format.', () => {
    assert.equal(isbnValidator("978-1-9403 1309-2"), formatErr);
  });
  it('Validate that "" is NOT in correct format.', () => {
    assert.equal(isbnValidator(""), formatErr);
  });
});

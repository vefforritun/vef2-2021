module.exports = (markdown, options) => {
  return new Promise((resolve, reject) => {
    let insideFences = false;
    const fixed = markdown
      .split('\n')
      .map((line) => {
        if (line.startsWith('```')) {
          if (insideFences) {
            insideFences = false;
            return line;
          }

          insideFences = true;
        }

        if (insideFences) {
          return line.replace(/</g, '&lt;');
        }

        return line;
      })
      .join('\n');

    return resolve(fixed);
  });
};

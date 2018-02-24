const defaults = {
  size: {
    min: 10,
    max: 150,
    growth: 1
  },
  selectors: {
    bucket: 'bucket'
  },
  timer: 10,
  color: '#d0793b'
};

let bucket = {
  size: defaults.size.min
};

function init() {
  bucketScale();
}

function scaleBucketElement(size) {
  document.getElementsByClassName(
    defaults.selectors.bucket
  )[0].style.width = `${size}px`;
  document.getElementsByClassName(
    defaults.selectors.bucket
  )[0].style.height = `${size}px`;
}

function bucketScale() {
  setInterval(() => {
    if (bucket.size >= defaults.size.max) {
      bucket.size = defaults.size.max - defaults.size.growth;
    }
    bucket.size += defaults.size.growth;
    scaleBucketElement(bucket.size);
  }, defaults.timer);
}

function resetBucket() {
  bucket.size = defaults.size.min;
  scaleBucketElement(bucket.size);
}

export { init, resetBucket };

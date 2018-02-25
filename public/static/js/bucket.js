const defaults = {
  size: {
    min: 0,
    max: 100,
    growth: 1
  },
  selectors: {
    bucket: 'bucket'
  },
  timer: 20,
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
  )[0].style.width = `${size * 5}px`;
}

function getCurrentBucketSize() {
  return bucket.size;
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

export { init, resetBucket, getCurrentBucketSize };

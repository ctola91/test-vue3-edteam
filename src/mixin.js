export const Hello = {
  data() {
    return {
      num: 0,
    };
  },
  created() {
    this.hello();
  },
  methods: {
    hello() {
      console.log("Hello from mixin!");
    },
    getNum() {
      return this.num;
    },
    increase() {
      this.num++;
    },
    decrease() {
      this.num--;
    },
  },
};

import { shallowMount } from "@vue/test-utils"; // stubs children so jest doesn't render all child components.
import HeroBanner from "@/components/home/HeroBanner.vue";

describe("HeroBanner Logic", () => {
  it("HeroBanner starts at slide 0", () => {
    const wrapper = shallowMount(HeroBanner, {
      stubs: ["router-link"], // stubs router-link
    }); // a wrapper object, not the component itself.
    expect(wrapper.vm.currentSlide).toBe(0); // vm = Vue model/instance. (the component instance)
  });

  it("changeCurrentSlide() slides to the clicked slide", () => {
    const wrapper = shallowMount(HeroBanner, { stubs: ["router-link"] });
    const num = Math.floor(Math.random() * wrapper.vm.slides.length);
    wrapper.vm.changeCurrentSlide(num);
    expect(wrapper.vm.currentSlide).toBe(num);
  });

  it("nextSlide() slides to next slide", () => {
    const wrapper = shallowMount(HeroBanner, { stubs: ["router-link"] });
    wrapper.vm.nextSlide();
    expect(wrapper.vm.currentSlide).toBe(1);
  });

  it("nextSlide() wraps back to 0 when it reaches the end", () => {
    const wrapper = shallowMount(HeroBanner, { stubs: ["router-link"] });
    wrapper.vm.currentSlide = wrapper.vm.slides.length - 1;
    wrapper.vm.nextSlide();
    expect(wrapper.vm.currentSlide).toBe(0);
  });
  it("autoPlaySlider() changes slider every 2 secs with setInterval", () => {
    jest.useFakeTimers();
    const wrapper = shallowMount(HeroBanner, { stubs: ["router-link"] });
    // didn't call autoPlaySlider() because it's called in mounted().
    expect(wrapper.vm.currentSlide).toBe(0);
    jest.advanceTimersByTime(2000);
    expect(wrapper.vm.currentSlide).toBe(1);
    jest.advanceTimersByTime(2000);
    expect(wrapper.vm.currentSlide).toBe(2);
    jest.useRealTimers();
  });
  it("autoPlaySlider() clears interval on unmount", () => {
    const spy = jest.spyOn(global, "clearInterval");
    const wrapper = shallowMount(HeroBanner, { stubs: ["router-link"] });
    wrapper.destroy();
    expect(spy).toHaveBeenCalled;
  });
});

describe("HeroBanner DOM Rendering", () => {
  const wrapper = shallowMount(HeroBanner, { stubs: ["router-link"] });
  
});

/*
how to bypass setInterval in jest:
jest.useFakeTimers() — replaces real timers with fake ones
jest.advanceTimersByTime(2000) — fast forwards time by 2000ms
jest.useRealTimers() — restores real timers after the test 
*/

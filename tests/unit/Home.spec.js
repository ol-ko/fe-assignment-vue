import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import listingsFixture from './listings.fixture';

describe('Home.vue', () => {
  it('renders a list of listings', () => {
    const dispatchMock = jest.fn;

    const wrapper = shallowMount(Home, {
      mocks: {
        $store: {
          dispatch: dispatchMock,
          state: {
            listings: listingsFixture,
          },
        },
      },
    });
    expect(wrapper.text()).toContain('Mountain view');
    expect(wrapper.text()).toContain('4 bedroom apartment in Eschenpark');
    expect(wrapper.findAll('li.listing')).toHaveLength(2);
  });
});

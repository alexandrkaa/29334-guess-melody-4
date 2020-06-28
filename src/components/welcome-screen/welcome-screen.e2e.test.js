import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcome-screen";

Enzyme.configure({
  adapter: new Adapter(),
});

const mockData = {
  errorCount: 5,
};

describe(`Welcome button press`, () => {
  it(`Should welcome button be pressed`, () => {
    const onWelcomeButtonPressed = jest.fn();
    const welcomeScreen = shallow(
        <WelcomeScreen
          errorsCount={mockData.errorCount}
          onWelcomeButtonPressed={onWelcomeButtonPressed}
        />
    );
    const welcomeButton = welcomeScreen.find(`button.welcome__button`);
    welcomeButton.simulate(`click`);
    expect(onWelcomeButtonPressed).toHaveBeenCalledTimes(1);
  });
});

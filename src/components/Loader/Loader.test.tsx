import { render } from "@testing-library/react-native";
import Loader from "./Loader";

describe('Loader', () => {
    it('should render correctly', () => {
        const {getByTestId} = render(<Loader />);
        const loader = getByTestId('loading-spinner');
        expect(loader).toBeTruthy();
  });
});
import { fireEvent, render } from "@testing-library/react-native";
import ErrorComponent from "./ErrorComponent";

describe('ErrorUI', () => {
    
    it('should display the correct error message', () => {
       const { getByText } = render(<ErrorComponent message="Test error" onRetry={() => {}} />);
       expect(getByText('Test error')).toBeVisible();
    });
    
    it('should call the retry function when the button is clicked', () => {
        const mockRetry = jest.fn();
        const { getByTestId } = render(<ErrorComponent message="Test error" onRetry={mockRetry} />);
        const retryButton = getByTestId('retry-btn');
        fireEvent.press(retryButton);
        expect(mockRetry).toHaveBeenCalled();
    });
})
import { fireEvent, render } from "@testing-library/react-native";
import  UserTypes  from "./UserTypes";

describe('UserTypes', () => {
    it('should render correctly', () => {
        const { getByText } = render(<UserTypes />);
        const adminButton = getByText('Admin');
        const userButton = getByText('Manager');

        expect(adminButton).toBeDefined();
        expect(userButton).toBeDefined();
    });
    
    it('should handle user type selection', () => {
        const mockOnPress = jest.fn();
        const { getByText } = render(<UserTypes onPress={mockOnPress}/>);
        const adminButton = getByText('Admin');
        const managerButton = getByText('Manager');

        // Simulate pressing Admin
      fireEvent.press(adminButton);
      expect(mockOnPress).toHaveBeenCalledWith('Admin');

      // Simulate pressing Manager
      fireEvent.press(managerButton);
      expect(mockOnPress).toHaveBeenCalledWith('Manager');
        
    });
    });
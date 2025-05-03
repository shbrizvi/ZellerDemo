import { render } from "@testing-library/react-native";
import NoData from "./NoData";

describe('Nodata', () => {
    it('should render without crashing', () => {
        const { getByText } = render(<NoData />);
        const noDataText = getByText('No Records Found');
        expect(noDataText).toBeDefined();
    });
    
    it('should display the correct message', () => {
        const { getByText } = render(<NoData message="No data available" />);
        const noDataText = getByText('No data available');
        expect(noDataText).toBeDefined();
    });
    
    }
);
// This component renders the footer of the application, with a plain text.
import { Layout } from "antd";
const { Footer } = Layout;
export default function AppFooter() {
  return (
    <Footer className="footer">
      <div className="text">Plain text </div>
    </Footer>
  );
}

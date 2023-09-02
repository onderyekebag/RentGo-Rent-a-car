import React from "react";
import UserTemplate from "../../templates/UserTemplate";
import SectionHeader from "../../components/user/common/sectionHeader/SectionHeader";
import PageHeader from "../../components/user/common/pageHeader/PageHeader";
import Spacer from "../../components/common/spacer/Spacer";
import { Container } from "react-bootstrap";

const PravicyPolicyPage = () => {
  return (
    <UserTemplate>
      <PageHeader title="Privacy Policy" />
      <Spacer />
      <SectionHeader title1="RentGo" title2="Privacy Policy" />
      <Container className="p-4">
        <h1>RentGo Privacy Policy</h1>
        <h6>Last Updated: October 3, 2023</h6>
        <p>
          At RentGo, we respect our customers' privacy and are committed to
          protecting your personal data. This privacy policy outlines how we
          collect, use, share, and safeguard personal information related to our
          website (www.rentgo.com) and services.
        </p>
        <h3>Types of Personal Data We Collect</h3>
        <p>At RentGo, we may collect the following types of personal data:</p>
        <ol>
          <li>Your first and last name.</li>
          <li>Contact information (email address, phone number).</li>
          <li>Information related to rental transactions and payments.</li>
          <li>Your vehicle rental requests and preferences.</li>
          <li>
            Location data (GPS data) with your consent for the purpose of
            improving service delivery.
          </li>
          <li>
            Information automatically collected through cookies and similar
            technologies (IP address, browser type, operating system).
          </li>
        </ol>
        <h3>Use of Personal Data</h3>
        <p>
          RentGo may use the collected personal data for the following purposes:
        </p>
        <ol>
          <li>
            Managing and facilitating vehicle rental transactions and providing
            our services.
          </li>
          <li>Offering personalized offers and promotions.</li>
          <li>Communication and sending notifications.</li>
          <li>Enhancing and improving our services.</li>
          <li>Compliance with relevant legal requirements.</li>
        </ol>
        <h3>Sharing of Personal Data</h3>
        <p>
          RentGo may share your personal data with third parties only for the
          following purposes:
        </p>
        <ol>
          <li>
            To facilitate rental transactions (e.g., vehicle rental providers).
          </li>
          <li>
            Service providers (e.g., payment processors and email services).
          </li>
          <li>
            Sharing as required by law or in response to legal processes with
            authorities.
          </li>
        </ol>
        <h3>Protection of Personal Data</h3>
        <p>
          RentGo takes appropriate security measures to protect your personal
          data and is committed to ensuring data security.
        </p>
        <h3>Children's Privacy</h3>
        <p>
          Our website is not intended for individuals under the age of 18, and
          we do not knowingly collect personal data from children.
        </p>
        <h3>Changes and Updates</h3>
        <p>
          This privacy policy may be updated from time to time, with changes
          becoming effective when posted on our website. It is important to
          regularly review the policy to understand how your data is being
          processed.
        </p>
        <h3>Contact Information</h3>
        <p>
          If you have any questions, suggestions, or data protection concerns,
          please do not hesitate to contact us:
        </p>
        <p>
          <p>RentGo Customer Support</p>
          <p>Email: support@rentgo.com</p>
          <p>Phone: (845)-356-0642</p>
        </p>
        <p>
          This privacy policy is designed to provide you with information on how
          we process your personal data. You may need to customize it to suit
          the specific requirements and legal regulations of your company.
          Additionally, it is important to have your privacy policy reviewed by
          a lawyer or legal advisor.
        </p>
      </Container>
    </UserTemplate>
  );
};

export default PravicyPolicyPage;

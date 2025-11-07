/**
 * @jest-environment jsdom
 */

import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";

// Load the HTML file
beforeEach(() => {
  document.body.innerHTML = `
  <h1>Student Scholarship & Financial Aid Tracking Platform</h1>

  <div class="tabs">
    <button class="active">Scholarship Applications</button>
    <button>Financial Aid Awards</button>
    <button>Status Updates</button>
    <button>User Profile</button>
  </div>

  <div class="container">
    <div class="card">
      <h2>Scholarship Applications</h2>
      <table>
        <tr>
          <th>Application ID</th>
          <th>Submission Date</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>Scholarship Name</td>
          <td>195040</td>
          <td><a href="#">Status</a></td>
        </tr>
      </table>
    </div>

    <div class="card">
      <h2>Financial Aid Awards</h2>
      <table>
        <tr>
          <th>Award Type</th>
          <th>Amount</th>
          <th>Disbursement Date</th>
        </tr>
        <tr>
          <td>Trial</td>
          <td>650</td>
          <td>14-03-2023</td>
        </tr>
      </table>
    </div>

    <div class="card profile">
      <img src="https://via.placeholder.com/80" alt="Profile Picture">
      <h3>Name</h3>
      <div class="profile-info">
        <p><b>Name:</b> John Doe</p>
      </div>
    </div>
  </div>

  <div class="card" style="margin-top:20px;">
    <h2>Status Updates</h2>
    <div class="status-box">
      Your application for <b>"Academic Excellence Scholarship"</b> has been approved.
    </div>
  </div>
  `;
});

describe("Scholarship & Financial Aid Portal", () => {
  test("renders the main title", () => {
    expect(
      screen.getByText("Student Scholarship & Financial Aid Tracking Platform")
    ).toBeInTheDocument();
  });

  test("renders all tab buttons", () => {
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(4);
    expect(screen.getByText("Scholarship Applications")).toHaveClass("active");
  });

  test("renders Scholarship Applications section", () => {
    expect(screen.getByText("Scholarship Applications")).toBeInTheDocument();
    expect(screen.getByText("Application ID")).toBeInTheDocument();
  });

  test("renders Financial Aid Awards table correctly", () => {
    expect(screen.getByText("Financial Aid Awards")).toBeInTheDocument();
    expect(screen.getByText("Trial")).toBeInTheDocument();
    expect(screen.getByText("650")).toBeInTheDocument();
  });

  test("displays user profile information", () => {
    expect(screen.getByAltText("Profile Picture")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });

  test("shows a status update message", () => {
    expect(
      screen.getByText(/Academic Excellence Scholarship/i)
    ).toBeInTheDocument();
  });
});

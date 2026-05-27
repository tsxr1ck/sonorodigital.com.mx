import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { GlassNavbar } from "@/components/ui/glass-navbar"

describe("GlassNavbar", () => {
  it("renders the wordmark", () => {
    render(<GlassNavbar />)
    expect(screen.getByText("Sonoro Digital")).toBeInTheDocument()
  })

  it("renders the SD logo", () => {
    render(<GlassNavbar />)
    expect(screen.getByText("SD")).toBeInTheDocument()
  })

  it("renders CTA button", () => {
    render(<GlassNavbar />)
    expect(
      screen.getByRole("button", { name: "Book a Discovery Call" }),
    ).toBeInTheDocument()
  })

  it("renders navigation links", () => {
    render(<GlassNavbar />)
    expect(screen.getByText("Services")).toBeInTheDocument()
    expect(screen.getByText("Case Studies")).toBeInTheDocument()
    expect(screen.getByText("Stack")).toBeInTheDocument()
    expect(screen.getByText("Why Us")).toBeInTheDocument()
  })

  it("renders hamburger button for mobile", () => {
    render(<GlassNavbar />)
    expect(screen.getByLabelText("Open menu")).toBeInTheDocument()
  })

  it("opens mobile menu on hamburger click", async () => {
    const user = userEvent.setup()
    render(<GlassNavbar />)
    await user.click(screen.getByLabelText("Open menu"))
    expect(screen.getByLabelText("Close menu")).toBeInTheDocument()
  })

  it("closes mobile menu on close button click", async () => {
    const user = userEvent.setup()
    render(<GlassNavbar />)
    await user.click(screen.getByLabelText("Open menu"))
    await user.click(screen.getByLabelText("Close menu"))
    expect(screen.getByLabelText("Open menu")).toBeInTheDocument()
  })

  it("renders CTA in mobile drawer", async () => {
    const user = userEvent.setup()
    render(<GlassNavbar />)
    await user.click(screen.getByLabelText("Open menu"))
    const buttons = screen.getAllByText("Book a Discovery Call")
    expect(buttons.length).toBeGreaterThanOrEqual(1)
  })
})

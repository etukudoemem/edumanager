import { Routes, Route } from "react-router-dom"
import { Layout } from "./layouts/Layout"
import { DashboardLayout } from "./layouts/DashboardLayout"
import { Dashboard } from "./pages/Dashboard"
import { Teachers } from "./pages/Teachers"
import { Students } from "./pages/Students"
import { Parents } from "./pages/Parents"
import { Subjects } from "./pages/Subjects"
import { Classes } from "./pages/Classes"
import { Events } from "./pages/Events"
import { Profile } from "./pages/Profile"
import { Settings } from "./pages/Settings"
import { TeacherDetails } from "./pages/TeacherDetails"
import { StudentDetails } from "./pages/StudentDetails"
import { Home } from "./pages/Home"
import { Announcements } from "./pages/Announcements"


function App() {

  return (
    <>
        <Routes>
            {/* <Route path="/" element={<Layout />} > */}
                <Route path="/" element={<Home />} />
                <Route path="dashboard" element={<DashboardLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="teachers" element={<Teachers />} />
                    <Route path="teachers/:teacherID" element={<TeacherDetails />} />
                    <Route path="students" element={<Students />} />
                    <Route path="students/:studentID" element={<StudentDetails />} />
                    <Route path="parents" element={<Parents />} />
                    <Route path="subjects" element={<Subjects />} />
                    <Route path="classes" element={<Classes />} />
                    <Route path="events" element={<Events />} />
                    <Route path="announcements" element={<Announcements />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="settings" element={<Settings />} />
                </Route>
            {/* </Route> */}
        </Routes>
    </>
  )
}

export default App

{/* <Route path="teachers" element={<Teachers />} />
                <Route path="students" element={<Students />} />
                <Route path="parents" element={<Parents />} />
                <Route path="subjects" element={<Subjects />} />
                <Route path="classes" element={<Classes />} />
                <Route path="events" element={<Events />} />
                <Route path="profile" element={<Profile />} />
                <Route path="settings" element={<Settings />} /> */}

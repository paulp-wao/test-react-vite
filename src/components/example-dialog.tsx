import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"

export function DialogDemo() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Edit Profile</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit Profile</DialogTitle>
                    <DialogDescription>
                        <p>Make changes to your profile here. Click <strong>save</strong> when you're done.</p>
                        <ul>
                            <li>Ensure your <em>name</em> is correct.</li>
                            <li>Update your <em>username</em> if needed.</li>
                            <li>Provide a brief <em>bio</em> about yourself.</li>
                            <li>Subscribe to our newsletter for updates.</li>
                        </ul>
                        <p>All fields are <span style={{ color: 'red' }}>required</span>.</p>
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input id="name" placeholder="Your name" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Username
                        </Label>
                        <Input id="username" placeholder="Your username" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="bio" className="text-right">
                            Bio
                        </Label>
                        <Textarea id="bio" placeholder="Tell us about yourself" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="newsletter" className="text-right">
                            Subscribe
                        </Label>
                        <Checkbox id="newsletter" className="col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}